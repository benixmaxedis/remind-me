'use server';

import { prisma } from '@/lib/prisma';
import { createTaskSchemaType } from '@/schema/createTask';
import { currentUser } from '@clerk/nextjs';

export async function createTask(data: createTaskSchemaType) {
  const user = await currentUser();

  if (!user) throw new Error('user not found');

  const { content, expiresAt, collectionId } = data;

  return await prisma.task.create({
    data: {
      userID: user.id,
      content,
      expiresAt,
      Collection: {
        connect: {
          id: collectionId,
        },
      },
    },
  });
}

export async function setTaskToDone(id: number) {
  const user = await currentUser();

  if (!user) throw new Error('user not found');

  return await prisma.task.update({
    where: {
      id,
      userID: user.id,
    },
    data: {
      done: true,
    },
  });
}
