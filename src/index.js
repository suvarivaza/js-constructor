import {Site} from "./classes/Site";
import {Sidebar} from "./classes/Sidebar";
import './styles/main.css'


new Site('#content').render()
new Sidebar('#sidebar').render()
