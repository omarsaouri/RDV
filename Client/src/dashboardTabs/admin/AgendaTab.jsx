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
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import React, { useRef, useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import getAllSpecialite from "../../api/modules/admin/specialiteModules/getAllSpecialite";
import addAgenda from "../../api/modules/admin/agendaModules/addAgenda";
import getAllAgenda from "../../api/modules/admin/agendaModules/getAllAgenda";
import deleteAgenda from "../../api/modules/admin/agendaModules/deleteAgenda";
import getSpecialite from "../../api/modules/admin/specialiteModules/getSpecialite";

function AgendaTab() {
  const alertDialogDisclosure = useDisclosure();
  const modalDisclosure = useDisclosure();
  const cancelRef = useRef();
  const [quotaMax, setQuotaMax] = useState(15);
  const [nomAgenda, setNomAgenda] = useState();
  const [selectedSpecialiteId, setSelectedSpecialiteId] = useState();
  const [specialites, setSpecialites] = useState([]);
  const [agendas, setAgendas] = useState([]);
  const [specialitesNames, setSpecialitesNames] = useState([]);

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

  const handleSelectChange = (event) => {
    setSelectedSpecialiteId(event.target.value);
  };

  const fetchAllSpecialite = async () => {
    try {
      const response = await getAllSpecialite();
      setSpecialites(response.data);
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

  const fetchSpecialite = async (specialiteId) => {
    try {
      const response = await getSpecialite(specialiteId);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSpecialiteNames = async () => {
    const names = await Promise.all(
      agendas.map(async (agenda) => {
        try {
          const specialiteDetails = await fetchSpecialite(
            agenda.idSpecialite.toString()
          );
          return specialiteDetails.nomSpecialite;
        } catch (error) {
          console.error("Error fetching agenda details:", error);
          return "";
        }
      })
    );
    setSpecialitesNames(names);
    console.log(specialitesNames);
  };

  const handleAddAgenda = async () => {
    try {
      const response = await addAgenda(
        nomAgenda,
        quotaMax,
        selectedSpecialiteId
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteAgenda = async (agendaId) => {
    try {
      const response = await deleteAgenda(agendaId);
      onCloseAlertDialog();
    } catch (error) {
      console.log(error);
      onCloseAlertDialog();
    }
  };

  useEffect(() => {
    fetchAllSpecialite();
    fetchAllAgendas();
  }, []);

  useEffect(() => {
    fetchSpecialiteNames();
  }, [specialites]);

  return (
    <>
      <div className="p-4 flex gap-2 flex-col">
        <h2 className="font-bold text-3xl">Agendas</h2>

        <SimpleGrid spacing={4}>
          {agendas.map((agenda, index) => (
            <Card size="md" className="w-full" variant="elevated">
              <CardBody className="flex flex-wrap justify-between items-center gap-20">
                <h2 className="font-bold">{agenda.nomAgenda}</h2>
                <p>
                  Affecté à la specialité
                  <span className="font-bold"> {specialitesNames[index]}</span>
                </p>
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
                            onClick={() => {
                              handleDeleteAgenda(agenda.id);
                            }}
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
                      <ModalHeader>Modifier Agenda</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody className="flex flex-col gap-5">
                        <Input
                          placeholder="Nom Agenda"
                          placeholder={agenda.nomAgenda}
                        />
                        <Select
                          placeholder="Choisir Spécialité"
                          value={agenda.idSpecialite}
                          onChange={handleSelectChange}
                        >
                          {specialites.map((specialite) => (
                            <option key={specialite.id} value={specialite.id}>
                              {specialite.nomSpecialite} {/*TODO: FIX THIS*/}
                            </option>
                          ))}
                        </Select>
                        <h2>Quota max</h2>
                        <NumberInput
                          defaultValue={agenda.quotaMax}
                          min={10}
                          max={20}
                        >
                          <NumberInputField />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
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
              <span className="font-bold text-2xl">Nouvel Agenda</span>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={3}>
              <Input
                placeholder="Nom Agenda"
                value={nomAgenda}
                onChange={(e) => setNomAgenda(e.target.value)}
              />
              <Select
                placeholder="Choisir Spécialité"
                value={selectedSpecialiteId}
                onChange={handleSelectChange}
              >
                {specialites.map((specialite) => (
                  <option key={specialite.id} value={specialite.id}>
                    {specialite.nomSpecialite} {/*TODO: FIX THIS*/}
                  </option>
                ))}
              </Select>
              <h2>Quota max</h2>
              <NumberInput
                min={0}
                max={1000}
                value={quotaMax}
                onChange={(valueString) => setQuotaMax(Number(valueString))}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Button colorScheme="blue" onClick={handleAddAgenda}>
                Créer
              </Button>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default AgendaTab;
