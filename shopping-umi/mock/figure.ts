import { Request, Response } from "express-serve-static-core";

export default {
    "GET /api/figures": (req: Request, res: Response) => {
        res.send({
                list: [
                    { 
                        "id": 1, 
                        "name": "GSC 香草 粘土人 预定", 
                        "price": 50, 
                        "inventory": 20,
                        "imgName": "banira.jpg",
                        "type": "small"
                    },
                    { 
                        "id": 2, 
                        "name": "GSC 巧克力 粘土人 现货", 
                        "price": 310, 
                        "inventory": 12,
                        "imgName": "shokora.jpg",
                        "type": "small"
                    },
                    { 
                        "id": 3, 
                        "name": "GSC 仙狐 粘土人 现货", 
                        "price": 50, 
                        "inventory": 5,
                        "imgName": "senko.jpg",
                        "type": "small"
                    },
                    {
                        "id": 4, 
                        "name": "GSC 约翰斯顿 粘土人 现货", 
                        "price": 40, 
                        "inventory": 3,
                        "imgName": "Johnston.jpg",
                        "type": "small"
                    },
                    {
                        "id": 5, 
                        "name": "stand stones 鬼灭之刃 扭蛋", 
                        "price": 25, 
                        "inventory": 10,
                        "imgName": "oniyaiba.jpg",
                        "type": "xsmall"
                    },
                    {
                        "id": 6, 
                        "name": "stand stones 名侦探柯南 扭蛋", 
                        "price": 25, 
                        "inventory": 7,
                        "imgName": "konan.jpg",
                        "type": "xsmall"
                    },
                    {
                        "id": 7, 
                        "name": "万代 口袋妖怪 宠物小精灵 扭蛋 现货", 
                        "price": 23, 
                        "inventory": 8,
                        "imgName": "pokemon.jpg",
                        "type": "xsmall"
                    },
                    {
                        "id": 8, 
                        "name": "名侦探柯南 会长 吧唧 扭蛋 现货", 
                        "price": 20, 
                        "inventory": 8,
                        "imgName": "konan.jpg",
                        "type": "xsmall"
                    },
                    {
                        "id": 9, 
                        "name": "Stronger 远坂凛 TYPE-MOON Racing ver 再版 现货", 
                        "price": 750, 
                        "inventory": 2,
                        "imgName": "toosakarin.jpg",
                        "type": "middle"
                    },
                    {
                        "id": 10, 
                        "name": "REVOLVE 1/8 狼与香辛料 赫萝 10周年纪念ver 现货", 
                        "price": 885, 
                        "inventory": 5,
                        "imgName": "hero.jpg",
                        "type": "middle"
                    },
                    {
                        "id": 11, 
                        "name": "GSC 1/7 FATE FGO Fate/Grand Order Ruler 贞德 现货", 
                        "price": 970, 
                        "inventory": 2,
                        "imgName": "fgo.jpg",
                        "type": "middle"
                    },
                    {
                        "id": 12, 
                        "name": "Furyu F:NEX 从零开始的异世界 蕾姆 花魁道中 现货", 
                        "price": 150, 
                        "inventory": 5,
                        "imgName": "reimu.jpg",
                        "type": "middle"
                    }
                ],
                types: [
                    {
                        id: 1000,
                        name: "粘土人",
                        type: "small"
                    },
                    {
                        id: 1001,
                        name: "扭蛋/吧唧",
                        type: "xsmall"
                    },
                    {
                        id: 1002,
                        name: "手办",
                        type: "middle"
                    }
                ]
            }
        );
    },
};
