import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Input,
  Select,
  Stack,
  Button,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

function SousAdminTab() {
  const alertDialogDisclosure = useDisclosure();
  const modalDisclosure = useDisclosure();
  const cancelRef = useRef();

  const onOpenAlertDialog = () => {
    alertDialogDisclosure.onOpen();
  };

  const onCloseAlertDialog = () => {
    alertDialogDisclosure.onClose();
  };

  const onOpenModal = () => {
    modalDisclosure.onOpen();
  };

  const onCloseModal = () => {
    modalDisclosure.onClose();
  };

  return (
    <>
      <div className="p-4 flex gap-2 flex-col">
        <h2 className="font-bold text-3xl">Collectif</h2>

        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        >
          <Card size="sm" variant="outline">
            <CardHeader>
              <Heading size="md"> Ahmed Serghini</Heading>
            </CardHeader>
            <CardBody>
              <p>
                Administareteur de l'unité{" "}
                <span className="font-bold">blah blah </span>
              </p>
            </CardBody>
            <CardFooter className="flex gap-2">
              <Button
                colorScheme="red"
                leftIcon={<MdDelete size={20} />}
                size="sm"
                iconSpacing={0.5}
                onClick={onOpenAlertDialog}
              >
                Supprimer
              </Button>

              <AlertDialog
                isOpen={alertDialogDisclosure.isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onCloseAlertDialog}
              >
                <AlertDialogOverlay>
                  <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                      Supprimer un administrateur d'unité
                    </AlertDialogHeader>

                    <AlertDialogBody>
                      Vous êtes sûr ? Vous ne pourrez pas annuler cette action
                      par la suite.
                    </AlertDialogBody>

                    <AlertDialogFooter>
                      <Button ref={cancelRef} onClick={onCloseAlertDialog}>
                        Annuler
                      </Button>
                      <Button
                        colorScheme="red"
                        onClick={onCloseAlertDialog}
                        ml={3}
                      >
                        Supprimer
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialogOverlay>
              </AlertDialog>

              <Button
                colorScheme="blue"
                leftIcon={<MdEdit size={20} />}
                size="sm"
                iconSpacing={0.5}
                onClick={onOpenModal}
              >
                Modifier
              </Button>

              <Modal isOpen={modalDisclosure.isOpen} onClose={onCloseModal}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Modal Title</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody></ModalBody>

                  <ModalFooter>
                    <Button colorScheme="red" mr={3} onClick={onCloseModal}>
                      Close
                    </Button>
                    <Button colorScheme="blue" onClick={onCloseModal}>
                      Save
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </div>

      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton className="w-10">
              <span className="font-bold text-2xl">
                Nouveau administrateur d'unité
              </span>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={3}>
              <Input placeholder="Nom Complet" />
              <Input placeholder="Email" />
              <Input placeholder="Mot de passe" />
              <Select placeholder="Choisir unité">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
              <Button colorScheme="blue">Créer</Button>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default SousAdminTab;
