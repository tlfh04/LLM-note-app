// Layout Component
import RootLayout from "../layouts/RootLayout";
// Note Page Component
import Home from "../pages/NotePages/Home";
import Note from "../pages/NotePages/Note";
import Chat from "../pages/NotePages/Chat";
// Route PATHS
import PATHS from "../constants/PATHS";

const rootRoutes = [
  {
    path: PATHS.ROOT.INDEX,
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: PATHS.ROOT.NOTE, Component: Note },
      { path: PATHS.ROOT.CHAT, Component: Chat },
    ],
  },
];

export default rootRoutes;
