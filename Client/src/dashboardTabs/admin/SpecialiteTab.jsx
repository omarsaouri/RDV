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
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import React, { useRef, useState, useEffect } from "react";
import getAllSpecialite from "../../api/modules/admin/specialiteModules/getAllSpecialite";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import getAllUnites from "../../api/modules/admin/uniteModules/getAllUnites";
import getUnite from "../../api/modules/admin/uniteModules/getUnite";

function SpecialiteTab() {
  const alertDialogDisclosure = useDisclosure();
  const modalDisclosure = useDisclosure();
  const cancelRef = useRef();
  const [specialites, setSpecialites] = useState([]);
  const [unites, setUnites] = useState([]);
  const [uniteNames, setUniteNames] = useState([]);
  const [agendas, setAgendas] = useState([]);

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

  const fetchAllSpecialites = async () => {
    try {
      const response = await getAllSpecialite();
      setSpecialites(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllUnites = async () => {
    try {
      const response = await getAllUnites();
      setUnites(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllAgendas = async () => {
    try {
      const response = await getAllAgenda();
      setAgendas(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUnite = async (uniteId) => {
    try {
      const response = await getUnite(uniteId);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllSpecialites();
    fetchAllUnites();
  }, []);

  return (
    <>
      <div className="p-4 flex gap-2 flex-col">
        <h2 className="font-bold text-3xl">Spécialités</h2>

        <SimpleGrid spacing={4}>
          {specialites.map((specialites, index) => (
            <Card size="md" className="w-full" variant="elevated">
              <CardBody className="flex flex-wrap justify-between items-center gap-20">
                <h2 className="font-bold">{specialites.nomSpecialite}</h2>

                <div className="flex gap-10">
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
                          Supprimer cette spécialité
                        </AlertDialogHeader>

                        <AlertDialogBody>
                          Vous êtes sûr ? Vous ne pourrez pas annuler cette
                          action par la suite.
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
                      <ModalHeader>Modifier Spécialité</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody className="flex flex-col gap-5">
                        <Input placeholder="Nom Spécialité" />
                        <Select placeholder="Choisir Unité">
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                          <option value="option3">Option 3</option>
                        </Select>
                        <CheckboxGroup
                          colorScheme="green"
                          defaultValue={["naruto", "kakashi"]}
                        >
                          <h2 className="font-bold">Agendas</h2>
                          <Stack spacing={[1, 5]} direction={["column", "row"]}>
                            <Checkbox value="naruto">Naruto</Checkbox>
                            <Checkbox value="sasuke">Sasuke</Checkbox>
                            <Checkbox value="kakashi">Kakashi</Checkbox>
                          </Stack>
                        </CheckboxGroup>
                      </ModalBody>

                      <ModalFooter>
                        <Button colorScheme="red" mr={3} onClick={onCloseModal}>
                          Annuler
                        </Button>
                        <Button colorScheme="blue" onClick={onCloseModal}>
                          Sauvegarder
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </div>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </div>

      <Accordion allowToggle className="w-96">
        <AccordionItem>
          <h2>
            <AccordionButton className="w-10">
              <span className="font-bold text-2xl">Nouvelle spécialité</span>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={3}>
              <Input placeholder="Nom spécialite" />
              <Select placeholder="Choisir Unité">
                {unites.map((unite) => (
                  <option key={unite.id} value={unite.id}>
                    {unite.nomUnite}
                  </option>
                ))}
              </Select>

              <CheckboxGroup colorScheme="green">
                <h2 className="font-bold">Agenda</h2>
                <Stack spacing={[1, 5]} direction={["column", "row"]}>
                  {agendas.map((agenda) => (
                    <Checkbox key={agenda.id} value={agenda.nomAgenda}>
                      {agenda.nomAgenda}
                    </Checkbox>
                  ))}
                </Stack>
              </CheckboxGroup>
              <Button colorScheme="blue">Créer</Button>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default SpecialiteTab;
