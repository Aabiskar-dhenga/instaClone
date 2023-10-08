import { useEffect, useState } from "react";
import styles from "./Searchmodal.module.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import SearchProfile from "../SearchProfile/SearchProfile";

export const Searchmodal = ({ showModal, setShowModal,searcedResultCollection}) => {
  const onClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <Modal isOpen={showModal} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search Username</ModalHeader>
          <ModalCloseButton onClick={onClose} />
          <ModalBody>
            <SearchProfile searcedResultCollection={searcedResultCollection} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
