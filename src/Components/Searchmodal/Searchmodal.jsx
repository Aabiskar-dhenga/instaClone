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

export const Searchmodal = ({ showModal, setShowModal }) => {
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
            <div className={styles.profileWrapper}>
              <img
                src="https://images.pexels.com/photos/14980615/pexels-photo-14980615/free-photo-of-city-road-man-people.jpeg?auto=compress&cs=tinysrgb&w=600"
                className={styles.img}
                alt=""
              />
              <div className={styles.detail}>
                <h3 className={styles.name}>Ayush Raymajhi</h3>
                <p className={styles.address}>Sweden 12 pkr</p>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
