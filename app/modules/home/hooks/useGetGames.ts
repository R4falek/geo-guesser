export const useGetGames = () => ({
  data: [
    {
      id: 1,
      icon: '🌍',
      isLocked: false,
      isFree: true,
      title: 'Świat',
      text: 'Klasyczny tryb GeoGuesser. Odgaduj lokalizacje z każdego zakątka naszej planety!',
    },
    {
      id: 2,
      icon: '🏰',
      isLocked: false,
      isFree: true,
      title: 'Europa',
      text: 'Sprawdź swoją znajomość europejskich krajów, miast i zabytków.',
    },
    {
      id: 3,
      icon: '🏙️',
      isLocked: true,
      isFree: false,
      title: 'Wielkie miasta',
      text: 'Czy rozpoznasz największe metropolie i stolice świata?',
    },
    {
      id: 4,
      icon: '📸',
      isLocked: true,
      isFree: false,
      title: 'Słynne miejsca',
      text: 'Znajdź najbardziej rozpoznawalne zabytki i atrakcje turystyczne.',
    },
  ],
})