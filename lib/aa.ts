const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function testCreateUser() {
  // Sample user data
  const user = {
    clerkId: "some-clerk-id",
    email: "example@example.com",
    firstName: "John",
    lastName: "Doe",
    // imageUrl: "http://example.com/image.png", // Uncomment if you have an imageUrl field in your model
  };

  try {
    // Create user in the database
    const newUser = await prisma.user.create({
      data: {
        clerkId: user.clerkId,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        // imageUrl: user.imageUrl, // Uncomment if you have an imageUrl field in your model
      },
    });

    // Log the created user
    console.log('User created:', newUser);
  } catch (error) {
    // Log any errors
    console.error('Error creating user:', error);
  } finally {
    // Disconnect the Prisma client
    await prisma.$disconnect();
  }
}

// Call the test function
testCreateUser();
