import {v4 as uuidv4} from 'uuid';

export const generateRandomID = () => {
  return uuidv4().slice(0, 8);
}

export const generateInitial = (name) => {
    const userInitial = name.charAt(0);
    return userInitial.toLowerCase() 
}