function getHost(url: string) {
  try {
    const u = new URL(url);
    return u.host;
  } catch (errMsg) {
    return global.location.host;
  }
}

function getAPI(url: string, config: { api?: string; protocol?: string; host?: string; pathname?: string }) {
  if (config.api) {
    return config.api;
  }
  const protocol = config.protocol || global.location.protocol;
  const host = config.host || getHost(url);
  const pathname = config.pathname || '/rtc/v1/play/';

  return `${protocol}//${host}${pathname}`;
}

export default class SRSPlayer {
  static isSupported() {
    if (!MediaStream || !RTCPeerConnection || !RTCSessionDescription) {
      return false;
    }
    if (!RTCPeerConnection.prototype.addTransceiver) {
      return false;
    }
    return true;
  }

  private api = '';
  private url = '';
  private stream = new MediaStream();
  private trackList: MediaStreamTrack[] = [];
  private pc: RTCPeerConnection | null = null;

  constructor(url: string, config: Player.SRSConfig) {
    // webrtc://192.168.0.225/quick/ClpheNxgRBy_XDhXXDq_CQ?vc=ivWxqY
    this.api = getAPI(url, config);
    this.url = url;
    this.stream = new MediaStream();
    this.trackList = [];
    // return this;
  }

  subscribe() {
    if (!this.url) {
      return null;
    }
    this.unsubscribe();
    this.createRTCPeerConnection();
    this.connectPeerConnection().catch(() => {
      // TODO: 异常处理
    });
    return this.stream;
  }

  unsubscribe() {
    if (!this.pc) {
      return;
    }
    this.closeRTCPeerConnection();
  }

  destroy() {
    this.unsubscribe();

    this.url = '';
    this.api = '';
    // @ts-ignore
    this.stream = null;
    this.trackList = [];
  }

  createRTCPeerConnection() {
    const pc = new RTCPeerConnection({
      iceTransportPolicy: 'all',
      bundlePolicy: 'max-bundle',
      rtcpMuxPolicy: 'require',
      iceCandidatePoolSize: 0,
      // @ts-ignore
      sdpSemantics: 'unified-plan',
      tcpCandidatePolicy: 'disable',
      IceTransportsType: 'nohost',
    });
    // const pc = new RTCPeerConnection(null);
    pc.addTransceiver('audio', { direction: 'recvonly' });
    pc.addTransceiver('video', { direction: 'recvonly' });

    // pc.onnegotiationneeded = (event) => console.log(event.type);
    // pc.onicecandidate = (event) => console.log(event.type);
    // pc.onicecandidateerror = (event) => console.log(event.type);
    // pc.onsignalingstatechange = (event) => console.log(event.type);
    // pc.oniceconnectionstatechange = (event) => console.log(event.type);
    // pc.oniceconnectionstatechange = (event) => console.log(event.type);
    // pc.onicegatheringstatechange = (event) => console.log(event.type);

    pc.ontrack = (event) => {
      // console.log(event.type);
      this.stream.addTrack(event.track);
      this.trackList.push(event.track);
    };

    // pc.onconnectionstatechange = (event) => {
    //   console.log(`${event.type}: ${event.target.connectionState}`);
    //   // if ('disconnected' === event.target.connectionState) {
    //   //   onDisconnect();
    //   // }
    // };

    this.pc = pc;
    return this.pc;
  }

  connectPeerConnection() {
    const { pc } = this;
    if (!pc) {
      return Promise.reject(new Error('RTCPeerConnection is not created'));
    }
    return pc
      .createOffer()
      .then((offer) => pc.setLocalDescription(offer).then(() => offer))
      .then((offer) => this.getSessionInfo({ sdp: offer.sdp as string }))
      .then((sdp) => pc.setRemoteDescription(new RTCSessionDescription({ type: 'answer', sdp })));
  }

  closeRTCPeerConnection() {
    if (this.trackList) {
      this.trackList.forEach((track) => {
        try {
          this.stream.removeTrack(track);
        } catch (errMsg) {}
        try {
          track.stop();
        } catch (errMsg) {}
      });
      this.trackList = [];
    }

    if (!this.pc) {
      return;
    }
    const { pc } = this;
    this.pc = null;
    pc.ontrack = () => {};
    pc.onconnectionstatechange = () => {};

    try {
      pc.getSenders().forEach((it) => pc.removeTrack(it));
    } catch (errMsg) {}
    try {
      pc.close();
    } catch (errMsg) {}
  }

  getSessionInfo({ sdp }: { sdp: string }) {
    return this.sendRequest(this.api, {
      method: 'POST',
      body: JSON.stringify({
        api: this.api,
        sdp,
        streamurl: this.url,
        clientip: null,
        tid: Number(Math.round(new Date().getTime() * Math.random() * 100))
          .toString(16)
          .substr(0, 7),
      }),
    }).then((info) => {
      if (!info.sdp) {
        return Promise.reject(info);
      }
      return info.sdp;
    });
  }

  sendRequest(url: string, opts: any) {
    return fetch(url, { mode: 'cors', headers: { 'Content-Type': 'application/json' }, method: 'GET', ...opts })
      .then((response) => {
        if (200 <= response.status && 300 > response.status) {
          return response;
        }
        const errMsg = new Error(response.statusText);
        Object.defineProperty(errMsg, 'response', { value: response });
        return Promise.reject(errMsg);
      })
      .then((response) => response.text())
      .then((text) => {
        try {
          return text ? JSON.parse(text) : {};
        } catch (errMsg) {
          return Promise.reject(errMsg);
        }
      });
  }
}
