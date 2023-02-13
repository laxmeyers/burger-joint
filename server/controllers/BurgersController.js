import { burgersService } from "../services/BurgersService";
import BaseController from "../utils/BaseController";


export class BurgersController extends BaseController{
    constructor(){
        super('api')

        this.router
            .get('/burgers', this.getBurgers)
            .get('/burgers/:id', this.getBurgerById)
            .post('/burgers', this.createIngrediant)
            .put('/burgers/:id', this.updateIngrediant)
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

    updateIngrediant(req, res, next) {
        try {
            let ingrediantData = req.body
            let ingrediant = req.params.id

            let updateIngrediant = burgersService.updateIngrediant(ingrediant, ingrediantData)

            res.send(updateIngrediant)
        } catch (error) {
            next(error)
        }
    }
}