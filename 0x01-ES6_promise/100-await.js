import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let objt;

  try {
    objt = { photo: await uploadPhoto(), user: await createUser() };
  } catch (error) {
    objt = {
      photo: null,
      user: null,
    };
  }

  return objt;
}
