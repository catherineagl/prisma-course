import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const main = async () => {
	const user = await prisma.user.create({ data: { name: 'kylie' } });
	console.log(user);
};

main()
	.catch((e) => {
		console.log(e.message);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
