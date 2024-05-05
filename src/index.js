import "./styles.css";

const UI = require("./modules/UI");
const Player = require("./modules/Player");

const p1 = Player("real");
const p2 = Player("computer");

const UI_Controller = UI();

UI_Controller.createBoards(p1.getBoard(), p2.getBoard());
