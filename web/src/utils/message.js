import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const message = (message, type) => {
  if (type === 'success') {
    toast.success(message)
  } else if (type === 'warn') {
    toast.warn(message)
  } else if (type === 'info') {
    toast.info(message)
  } else if (type === 'error') {
    toast.error(message)
  } else {
     toast(message)
  }
}