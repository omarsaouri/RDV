import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Card,
  CardBody,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  SimpleGrid,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import getAllAdminUnite from "../../api/modules/admin/adminUniteModules/getAllAdminUnite";
import getAllUnites from "../../api/modules/admin/uniteModules/getAllUnites";
import getUnite from "../../api/modules/admin/uniteModules/getUnite";
import addAdminUnite from "../../api/modules/admin/adminUniteModules/addAdminUnite";
import putAdminUnite from "../../api/modules/admin/adminUniteModules/putAdminUnite";
import deleteAdminUnite from "../../api/modules/admin/adminUniteModules/deleteAdminUnite";

function SousAdminTab() {
  const alertDialogDisclosure = useDisclosure();
  const modalDisclosure = useDisclosure();
  const cancelRef = useRef();
  const [adminsUnite, setAdminsUnite] = useState([]);
  const [uniteNames, setUniteNames] = useState([]);
  const [unites, setUnites] = useState([]);
  const [selectedUnitId, setSelectedUnitId] = useState("");
  const [nomComplet, setNomComplet] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    setSelectedUnitId(event.target.value);
  };

  const fetchAdminUnite = async () => {
    try {
      const response = await getAllAdminUnite();
      setAdminsUnite(response.data);
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

  const fetchUniteNames = async () => {
    const names = await Promise.all(
      adminsUnite.map(async (adminUnite) => {
        try {
          const unitDetails = await fetchUnite(adminUnite.idUnite.toString());
          return unitDetails.nomUnite;
        } catch (error) {
          console.error("Error fetching unit details:", error);
          return "";
        }
      })
    );
    setUniteNames(names);
  };

  const fetchAllUnites = async () => {
    try {
      const response = await getAllUnites();
      setUnites(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddAdminUnite = async () => {
    try {
      const response = await addAdminUnite(
        nomComplet,
        email,
        password,
        selectedUnitId
      );
      console.log(response);
      setNomComplet("");
      setEmail("");
      setPassword("");
      setSelectedUnitId("");
    } catch (error) {
      console.log(error);
    }
  };

  const handlePutAdminUnite = async (
    id,
    nomComplet,
    email,
    password,
    selectedUnitId
  ) => {
    try {
      const response = await putAdminUnite(
        id,
        nomComplet,
        email,
        password,
        selectedUnitId
      );
      console.log(response);
      onCloseModal();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteAdminUnite = async (id) => {
    try {
      const response = await deleteAdminUnite(id);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    onCloseAlertDialog();
  };

  useEffect(() => {
    fetchAdminUnite();
    fetchAllUnites();
  }, []);

  useEffect(() => {
    fetchUniteNames();
  }, [adminsUnite]);

  return (
    <>
      <div className="p-4 flex gap-2 flex-col">
        <h2 className="font-bold text-3xl">Collectif</h2>

        <SimpleGrid spacing={4}>
          {adminsUnite.map((adminUnite, index) => (
            <Card
              key={adminUnite.id}
              size="md"
              className="w-full"
              variant="elevated"
            >
              <CardBody className="flex flex-wrap justify-between items-center gap-20">
                <h2 className="font-bold">{adminUnite.nomComplet}</h2>
                <p>
                  Administareteur de l'unité{" "}
                  <span className="font-bold">{uniteNames[index]}</span>
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
                          Supprimer un administrateur d'unité
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
                              handleDeleteAdminUnite(adminUnite.id);
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
                      <ModalHeader>Modifier administrateur d'unité</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody className="flex flex-col gap-5">
                        <Input
                          placeholder={adminUnite.nomComplet}
                          value={nomComplet}
                          onChange={(e) => {
                            setNomComplet(e.target.value);
                          }}
                        />
                        <Input
                          placeholder={adminUnite.email}
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                        <Input
                          placeholder={adminUnite.password}
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                        <Select
                          placeholder="Choisir unité"
                          value={adminUnite.uniteId}
                          onChange={handleSelectChange}
                        >
                          {unites.map((unite) => (
                            <option key={unite.id} value={unite.id}>
                              {unite.nomUnite} {/*TODO: FIX THIS*/}
                            </option>
                          ))}
                        </Select>
                      </ModalBody>

                      <ModalFooter>
                        <Button colorScheme="red" mr={3} onClick={onCloseModal}>
                          Annuler
                        </Button>
                        <Button
                          colorScheme="blue"
                          onClick={() => {
                            handlePutAdminUnite(
                              adminUnite.id,
                              nomComplet,
                              email,
                              password,
                              selectedUnitId
                            );
                          }}
                        >
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
              <span className="font-bold text-2xl">
                Nouveau administrateur d'unité
              </span>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={3}>
              <Input
                placeholder="Nom Complet"
                value={nomComplet}
                onChange={(e) => {
                  setNomComplet(e.target.value);
                }}
              />
              <Input
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Input
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Select
                placeholder="Choisir unité"
                value={selectedUnitId}
                onChange={handleSelectChange}
              >
                {unites.map((unite) => (
                  <option key={unite.id} value={unite.id}>
                    {unite.nomUnite}
                  </option>
                ))}
              </Select>
              <Button colorScheme="blue" onClick={handleAddAdminUnite}>
                Créer
              </Button>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default SousAdminTab;
