import { NextResponse as Response } from 'next/server';

export async function POST(request) {
    try {
        const data = await request.json();
        const { firstName, lastName, email } = data;
        // Here you would typically handle the registration logic,
        // such as saving the user to a database.
        console.log('Registering user:', { firstName, lastName, email });
        return Response.json({ message: 'User registered successfully' }, { status: 201 });
    } catch (error) {
        console.error('Error registering user:', error);
        return Response.json({ error: 'Failed to register user' }, { status: 500 });
    }
}