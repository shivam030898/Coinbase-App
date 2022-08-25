import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId:'tae71gg1',
    dataset:'production',
    apiVersion:'2021-03-25',
    token:'skOYeXt2TLjPX6nUDmvasmNctfDiFDnNtAa9eysPzHdPZu4p0m8RfODE63FpCQEVvakRwmie3vkT2HICxaihUbBsVgsr69yuAkN0sltjvYScuRZUxGKJjFi2Ev3qbdEX16lJQ5SGPqv3nWXNScqxlKlwOR4bgGGDvAMCAwXci4e6wh80qXFN',
    useCdn:'false',
})