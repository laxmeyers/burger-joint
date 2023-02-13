import { burgersService } from "../services/BurgersService";
import BaseController from "../utils/BaseController";


export class BurgersController extends BaseController{
    constructor(){
        super('api')

        this.router
            .get('/burgers', this.getBurgers)
            .get('/burgers/:id', this.getBurgerById)
            .post('/burgers', this.createIngrediant)
    }

    getBurgers(req, res, next) {
        try {
            let burgers = burgersService.getBurgers()

            res.send(burgers)
        } catch (error) {
            next(error)
        }
    }

    getBurgerById(req, res, next) {
        try {
            let ingrediantId = req.params.id

            const ingrediant = burgersService.getBurgerById(ingrediantId)

            res.send(ingrediant)
            
        } catch (error) {
            next(error)
        }
    }

    createIngrediant(req, res, next) {
        try {
            let rawIngrediant = req.body

            let newIngrediant = burgersService.createIngrediant(rawIngrediant)

            res.send(newIngrediant)
        } catch (error) {
            next()
        }
    }
}