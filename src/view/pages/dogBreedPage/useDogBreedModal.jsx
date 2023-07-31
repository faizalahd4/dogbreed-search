/**
 * Dog breed card component
 * 
 * @author - Faizal
 * @date - 31st July, 2023 
 */
// GENERIC IMPORT
import {useState} from 'react';

// GENERIC COMPONENT IMPORT
import {Alert} from '../../atoms';
import {Dialog} from '../../molecules';

// SELF COMPONENT IMPORT
import DogBreedDetails from './components/dogBreedDetails';

// DOG BREED MODAL
export const useDogBreedModal = () => {
  const [{isOpen, selectedData}, setModalOpen] = useState({isOpen: false, selectedData: null});

  const close = () => setModalOpen({isOpen: false, selectedData: null});

  return {
    show: (data) =>
      setModalOpen({isOpen: true, selectedData: data}),
    child: isOpen && (
      <Dialog title='Dog breed' onClose={close}>
        <DogBreedDetails data={selectedData}/>
      </Dialog>
    ),
  };
};

// DOG BREED ALERT MODAL
export const useDogBreedErrorAlertModal = () => {
  const [{isOpen}, setModalOpen] = useState({isOpen: false});

  const close = () => setModalOpen({isOpen: false});

  return {
    show: () =>
      setModalOpen({isOpen: true}),
    child: isOpen && (
      <Dialog title='Error' onClose={close} size='small'>
        <Alert message='Please try again later' type='error' />
      </Dialog>
    ),
  };
};