import {
  MenuIcon,
  MenuAlt2Icon,
  VideoCameraIcon,
  MicrophoneIcon,
  OfficeBuildingIcon,
  ShoppingCartIcon,
  StarIcon,
  DesktopComputerIcon,
  HomeIcon,
} from '@heroicons/react/solid';
import IconeMenuPrincipal from './IconeMenuPrincipal';
import Logo from './Logo';

const MenuPrincipal = () => {
  return (
    <div className="bg-black">
      <div className="flex flex-row sm:flex-col items-center justify-evenly sm:justify-start p-2 sm:h-screen sm:sticky sm: top-0">
        <div className="w-20 sm:hidden">
          <MenuIcon className="text-white h-6 m-2" />
        </div>

        <div className="flex items-center flex-grow sm:flex-grow-0 space-x-2">
          <Logo />
          <div className="text-white text-3xl font-bold sm:hidden">
            Canaltech
          </div>
        </div>

        <IconeMenuPrincipal Icone={MenuAlt2Icon} />
        <IconeMenuPrincipal Icone={VideoCameraIcon} />
        <IconeMenuPrincipal Icone={MicrophoneIcon} />
        <IconeMenuPrincipal Icone={OfficeBuildingIcon} />
        <IconeMenuPrincipal Icone={DesktopComputerIcon} />
        <IconeMenuPrincipal Icone={HomeIcon} />
        <IconeMenuPrincipal Icone={ShoppingCartIcon} />
        <IconeMenuPrincipal Icone={StarIcon} />
      </div>
    </div>
  );
};

export default MenuPrincipal;
