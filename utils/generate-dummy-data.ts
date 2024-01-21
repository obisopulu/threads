import { fake } from '@faker-js/faker'

import { thread, User } from '../types/threads'

export function createRandomUser(): User {
    const name = faker.person.firstname();
}