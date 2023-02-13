import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { raw } from "express"
import { fakeDb } from "../db/fakeDb.js"

class BurgersService{
    createIngrediant(rawIngrediant) {
        if (!rawIngrediant.name || !rawIngrediant.cost) {
            throw new BadRequest('Invalid Ingrediant Data')
        }

        rawIngrediant.id = (Math.floor(Math.random() * 19000000) + '_ab_' + Math.floor(Math.random() * 19000000))

        fakeDb.burgers.push(rawIngrediant)
        
        return rawIngrediant
    }
    getBurgerById(ingrediantId) {
        let ingrediant = fakeDb.burgers.find(b => b.id == ingrediantId)

        if (!ingrediant) {
            throw new BadRequest('Bad Ingrediant Id')
        }

        return ingrediant
    }
    getBurgers() {

        return fakeDb.burgers

    }

}

export const burgersService = new BurgersService()