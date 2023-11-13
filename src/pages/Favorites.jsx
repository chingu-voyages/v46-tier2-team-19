import { useEffect, useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Button, Heading } from "@/features/ui";
import { RecipeCard } from "@/features/recipes/components/recipe-card";
import usePageTitle from "../hooks/usePageTitle";

const Favorites = () => {
  usePageTitle("Favorite Recipes");

  const [favorites, setFavorites] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      // Parse the saved JSON data
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const hasFavorites = favorites.length > 0;

  return (
    <>
      <Heading level="h1" variant="tangerine" className="px-10 pt-10">
        Favorite Recipes
      </Heading>

      <div className="grid place-content-center">
        <Button
          variant="secondary"
          size="small"
          onClick={() => {
            hasFavorites ? setIsOpen(true) : null;
          }}
        >
          {hasFavorites
            ? `Clear Favorites ${hasFavorites ? `(${favorites.length})` : null}`
            : "No Favorites Saved Yet"}
        </Button>
      </div>

      <div className="grid justify-center grid-cols-1 mx-auto mt-5 mb-10 gap-x-10 gap-y-12 justify-items-center md:grid-cols-2 w-fit auto-rows-fr lg:grid-cols-3">
        {favorites.map((recipeId) => (
          <RecipeCard key={recipeId} {...recipeId} />
        ))}
      </div>

      <Transition show={isOpen} as={Fragment}>
        <Dialog onClose={() => setIsOpen(false)} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* The backdrop, rendered as a fixed sibling to the panel container */}
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>

          {/* Full-screen container to center the panel */}
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {/* The actual dialog panel  */}
              <Dialog.Panel className="mx-auto max-w-sm rounded-lg bg-white overflow-hidden">
                <Dialog.Title className="px-6 py-4 bg-tangerine-700 text-white">
                  Clear Favorites
                </Dialog.Title>
                <hr />
                <div className="p-6">
                  <Dialog.Description>
                    This will permanently remove your favorite recipes.
                  </Dialog.Description>
                  <p className="mt-4">
                    <strong>
                      Are you sure you want to clear your favorites?
                    </strong>
                  </p>
                </div>
                <hr />
                <div className="flex gap-10 p-6">
                  <Button
                    variant="secondary"
                    size="small"
                    onClick={() => {
                      localStorage.removeItem("favorites");
                      setFavorites([]);
                      setIsOpen(false);
                    }}
                    className="w-full place-content-center"
                  >
                    Yes
                  </Button>
                  <Button
                    variant="secondary"
                    size="small"
                    onClick={() => setIsOpen(false)}
                    className="w-full place-content-center"
                  >
                    No
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Favorites;
