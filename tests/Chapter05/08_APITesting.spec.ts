import {test, expect} from '@playwright/test'
// import { request } from 'node:http'


test('GET API TESTING', async({request})=>{

    const response=await request.get('https://automationexercise.com/api/productsList')

    expect(response.status()).toBe(200)

    // const body=await response.json()
    const body=await response.text()

    console.log(body)
    // expect(body.id).toBe(1)
    // expect(body.name).toBe('Blue Top')
})