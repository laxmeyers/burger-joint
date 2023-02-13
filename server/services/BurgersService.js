import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { raw } from "express"
import { fakeDb } from "../db/fakeDb.js"

class BurgersService{
    updateIngrediant(ingrediant, ingrediantData) {
        let found = fakeDb.burgers.find(b => b.id == ingrediant)

        if (!found) {
            throw new BadRequest('Bad Ingrediant Id')
        }

        if (!ingrediantData.name || !ingrediantData.cost) {
            throw new BadRequest('Invalid Ingrediant Data')
        }


        found.name = ingrediantData.name
        found.cost = ingrediantData.cost

        return found

    }
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