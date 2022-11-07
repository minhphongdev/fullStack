import icons from "./icons"
const { MdOutlineLibraryMusic } = icons

export const sidebarMenu = [
    {
        path: 'mymusic',
        text: 'Ca Nhan',
        icons: <MdOutlineLibraryMusic size={24} />

    },
    {
        path: '',
        text: 'Kham Pha',
        end: true,
        icons: <MdOutlineLibraryMusic size={24} />

    },
    {
        path: 'zing-chart',
        text: '#zingchart',
        icons: <MdOutlineLibraryMusic size={24} />

    },
    {
        path: 'follow',
        text: 'Theo Doi',
        icons: <MdOutlineLibraryMusic size={24} />

    },
]