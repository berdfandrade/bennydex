# BennyDex

Este é um pequeno projeto de Pokedex que utiliza a PokeAPI para obter dados e exibir informações sobre os Pokémon. O projeto consiste em uma interface de usuário simples, onde os cards dos Pokémon são renderizados com base nos dados retornados pela API.

![623shots_so](https://github.com/berdfandrade/bennydex/assets/96706881/c6b77600-4db5-4eb8-bdac-93ad0f6716d8)

## Componente PokemonCard

O componente `PokemonCard` é responsável por renderizar um card individual para um Pokémon. Ele recebe um objeto `pokemon` como propriedade, que contém informações como nome, imagens, tipos e estatísticas do Pokémon.

### Estrutura do Card

O card do Pokémon é renderizado dentro de uma `<Box>` do Chakra UI. Ele contém as seguintes informações:

- Nome do Pokémon: Renderizado como um `<Text>` com o nome do Pokémon em negrito e cor personalizada.
- Imagem do Pokémon: Renderizada como uma `<Image>`, exibindo a imagem frontal do Pokémon.
- Estatísticas do Pokémon: Renderizadas como um grupo de `<Stat>`, onde cada estatística é exibida em um `<StatLabel>` seguido pelo valor numérico em um `<StatNumber>`. As estatísticas são exibidas em uma grade de 3 colunas usando `<Grid>` e `<GridItem>`.
- Tipos do Pokémon: Renderizados como `<Tag>`, onde cada tipo é representado como uma tag colorida. Os tipos são mapeados para cores e rótulos personalizados com base no tipo do Pokémon.

### Funções e Hooks utilizados

O componente `PokemonCard` utiliza o hook `useDisclosure` do Chakra UI para controlar o estado de abertura do card. Além disso, a função `capitalizeWords` é utilizada para formatar corretamente o nome do Pokémon.

## Uso do componente

O componente `PokemonCard` pode ser utilizado em um contexto maior, como parte de uma lista de Pokémon em uma Pokedex. Ele recebe os dados de um Pokémon como propriedade e renderiza o card correspondente.

Exemplo de uso:

```jsx
import PokemonCard from "./PokemonCard";

const Pokedex = () => {
  // Array de dados de Pokémon
  const pokemonList = [
    { name: "bulbasaur", /* outros dados do Pokémon */ },
    { name: "charmander", /* outros dados do Pokémon */ },
    // Outros Pokémon...
  ];

  return (
    <div>
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default Pokedex;
```

Neste exemplo, `PokemonCard` é renderizado para cada Pokémon na `pokemonList`. Cada card exibirá as informações corretas com base nos dados do Pokémon.

Esse é apenas um exemplo básico de como o componente `PokemonCard` pode ser utilizado em um contexto maior de uma Pokedex. Você pode personalizar e estilizar o componente de acordo com suas necessidades.

## Considerações finais

Este projeto de Pokedex é uma maneira divertida de explorar a PokeAPI e exibir informações sobre os Pokémon de forma visualmente agradável. Você pode expandir o projeto adicionando recursos como pesquisa, filtros e detalhes adicionais sobre cada Pokémon.

Lembre-se de consultar a documentação da PokeAPI para obter mais informações sobre os recursos disponíveis e as possibilidades de uso.

Divirta-se explorando o mundo dos Pokémon com a sua Pokedex!

