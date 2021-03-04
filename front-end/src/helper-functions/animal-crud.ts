// @ts-nocheck

export const deleteAnimal = async (
  root,
  animalId,
  fromAnimalListPage = false
) => {
  root.$store.dispatch("togLoading", { loadingStatus: true });
  try {
    const confirmation = await root.$swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this animal deletion!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0457E7",
      cancelButtonColor: "#D62E1F",
      confirmButtonText: "Yes, delete it!",
    });
    if (!confirmation.isConfirmed) {
      root.$store.dispatch("togLoading", { loadingStatus: false });
      return;
    }

    await root.$store.dispatch({
      type: "deleteAnimal",
      animalId,
    });
    //SWAL is not needed - just annoying for users.
    //Can be restored if needed later!.
    // root.$swal.fire({
    //   title: "Animal deleted successfully!",
    //   confirmButtonColor: "#0457E7",
    //   icon: "success",
    //   width: 600,
    //   padding: "3em",
    //   background: "#fff",
    // });
    if (!fromAnimalListPage) {
      root.$router.push({
        name: "AnimalsList",
      });
    }
  } catch (error) {
    root.$swal.fire({
      title: "Error: animal not deleted!",
      text: "Please try again at a later time.",
      confirmButtonColor: "#D62E1F",
      icon: "error",
      width: 600,
      padding: "3em",
      background: "#fff",
    });
  }
  root.$store.dispatch("togLoading", { loadingStatus: false });
};
