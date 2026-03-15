// import { LoadingOutlined, PlayCircleOutlined } from '@ant-design/icons';
// import { useContext } from 'react';
// import ReactjsPlayer from '../ReactjsPlayer';
// import { AutoHide } from './AutoHide';
// import PlayerBar from './PlayerBar';

// function PlayerSkin() {
//   const { state } = useContext(ReactjsPlayer.Context);
//   if (!state) {
//     return null;
//   }

//   return (
//     <AutoHide>
//       <div
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           overflow: 'hidden',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           fontSize: 64,
//           color: '#fff',
//           cursor: 'pointer',
//         }}
//       >
//         {(state.loading || state.waiting || state.seeking) && <LoadingOutlined />}
//         {(state.paused || state.ended) && <PlayCircleOutlined />}
//       </div>
//       <PlayerBar />
//     </AutoHide>
//   );
// }

// export default PlayerSkin;

export * from './LivePlayerSkin';
