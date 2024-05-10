import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
    await prisma.user.upsert({
        where: {
            email: 'miawmpz@gmail.com'
        },
        create: {
            name: 'Nickolas Dias',
            email: 'miawmpz@gmail.com',
            password: '123456',
            admin: true,
        },
        update: {}
    })

    await prisma.product.upsert({
        where: { id: 1, },
        update: {},
        create: {
            name: 'Poké Bola',
            description: 'A famosa Poké Bola é um item usado para capturar Pokémon.',
            price: 100,
            imageUrl: 'https://static1-br.millenium.gg/articles/1/33/51/@/80352-pokemon-go-objets-pokestop-pokeball-orig-1-full-1.png'
        }
    })

        await prisma.product.upsert({
        where: { id: 2, },
        update: {},
        create: {
            name: 'Grande Bola',
            description: 'Grandes Bolas também são usadas para capturar Pokémon. No entanto, elas são mais eficazes que as Poké Bolas padrão.',
            price: 100,
            imageUrl: 'https://static1-br.millenium.gg/articles/1/33/51/@/80421-pokemon-go-superball-objet-orig-1-full-1.png'
        }
    })

        await prisma.product.upsert({
        where: { id: 3, },
        update: {},
        create: {
            name: 'Ultra Bola',
            description: 'Ultra Bolas também são usadas para capturar Pokémon. No entanto, elas são mais eficazes que Poké Bolas.',
            price: 100,
            imageUrl: 'https://static1-br.millenium.gg/articles/1/33/51/@/80424-pokemon-go-hyper-ball-objets-orig-1-full-1.png'
        }
    })

        await prisma.product.upsert({
        where: { id: 4, },
        update: {},
        create: {
            name: 'Premier Ball',
            description: 'Este novo tipo de bola está disponível apenas em ataques. Permite capturar os Pokémon que você derrotou.',
            price: 100,
            imageUrl: 'https://static1-br.millenium.gg/articles/1/33/51/@/80427-pokemon-go-premier-ball-orig-1-full-1.png'
        }
    })

        await prisma.product.upsert({
        where: { id: 5, },
        update: {},
        create: {
            name: 'Ovo da sorte',
            description: 'Ovos da Sorte não tem nada a ver com os Ovos das Incubadoras. Se você ativar um Ovo da Sorte, receberá Pontos de Experiência (PE) em dobro por 30 minutos.',
            price: 100,
            imageUrl: 'https://static1-br.millenium.gg/articles/1/33/51/@/80370-pokemon-go-oeuf-chance-objets-orig-1-full-1.png'
        }
    })

        await prisma.product.upsert({
        where: { id: 6, },
        update: {},
        create: {
            name: 'Incubadora',
            description: 'Incubadora (como o próprio nome sugere) permitirá que você inicie o processo de incubação de ovos.',
            price: 100,
            imageUrl: 'https://static1-br.millenium.gg/articles/1/33/51/@/80364-pokemon-go-item-incubateur-orig-1-full-1.png'
        }
    })

        await prisma.product.upsert({
        where: { id: 7, },
        update: {},
        create: {
            name: 'Super Incubadora',
            description: 'A diferença é que a Super Incubadora choca os ovos 1,5x mais rápido.',
            price: 100,
            imageUrl: 'https://static1-br.millenium.gg/articles/1/33/51/@/80367-super-incubator-orig-1-full-1.png'
        }
    })

        await prisma.product.upsert({
        where: { id: 8, },
        update: {},
        create: {
            name: 'Incenso',
            description: 'O incenso pode ser usado para atrair Pokémon selvagens por 30 minutos.',
            price: 100,
            imageUrl: 'https://static1-br.millenium.gg/articles/1/33/51/@/80361-pokemon-go-encens-objet-orig-1-full-1.png'
        }
    })

        await prisma.product.upsert({
        where: { id: 9, },
        update: {},
        create: {
            name: 'Máximo Reviver',
            description: 'Este item revive um Pokémon que desmaiou e restaura completamente seu PS',
            price: 100,
            imageUrl: 'https://static1-br.millenium.gg/articles/1/33/51/@/80358-maxrevive-store-orig-1-full-1.png'
        }
    })

        await prisma.product.upsert({
        where: { id: 10, },
        update: {},
        create: {
            name: 'Poção máxima',
            description: 'Este item restaura completamente os Pontos de Saúde (PS) do seu Pokémon.',
            price: 100,
            imageUrl: 'https://static1-br.millenium.gg/articles/1/33/51/@/80355-max-potion-multi-orig-1-full-1.png'
        }
    })

        await prisma.product.upsert({
        where: { id: 11, },
        update: {},
        create: {
            name: 'Módulo Atrair',
            description: 'O Módulo Atrair, também conhecido como Lure, atrairá Pokémon para um PokéStop por 30 minutos.',
            price: 100,
            imageUrl: 'https://static1-br.millenium.gg/articles/1/33/51/@/80373-pokemon-go-item-module-leurre-orig-1-full-1.png'
        }
    })

        await prisma.product.upsert({
        where: { id: 12, },
        update: {},
        create: {
            name: 'Módulo Atrair Musgoso',
            description: 'Atrai Pokémon do tipo Inseto , Grama e Venenoso por 30 minutos. É necessário evoluir Eevee para Leafeon.',
            price: 100,
            imageUrl: 'https://static1-br.millenium.gg/articles/1/33/51/@/80376-mossy-lure-module-orig-1-full-1.png'
        }
    })

        await prisma.product.upsert({
        where: { id: 13, },
        update: {},
        create: {
            name: 'Módulo Atrair Glacial',
            description: 'Atrai Pokémon do tipo Água e Gelo por 30 minutos. É necessário evoluir Eevee para Glaceon.',
            price: 100,
            imageUrl: 'https://static1-br.millenium.gg/articles/1/33/51/@/80379-magnetic-lure-module-orig-1-full-1.png'
        }
    })

        await prisma.product.upsert({
        where: { id: 14, },
        update: {},
        create: {
            name: 'Módulo Atrair Magnético',
            description: 'Atrai Pokémon do tipo Elétrico , Pedra e Aço por 30 minutos. Também é necessário evoluir Magneton e Nosepass.',
            price: 100,
            imageUrl: 'https://static1-br.millenium.gg/articles/1/33/51/@/80382-glacial-lure-module-orig-1-full-1.png'
        }
    })

        await prisma.product.upsert({
        where: { id: 15, },
        update: {},
        create: {
            name: 'Passe de Reide',
            description: 'O Raid Pass permite que você participe de uma batalha de incursão de sua escolha. Você só pode segurar um de cada vez e, se você não tiver um em seu inventário, poderá reivindicar um gratuitamente em qualquer academia.',
            price: 100,
            imageUrl: 'https://static1-br.millenium.gg/articles/1/33/51/@/80451-pokemon-go-objet-pass-raid-orig-1-full-1.png'
        }
    })

        await prisma.product.upsert({
        where: { id: 16, },
        update: {},
        create: {
            name: 'Passe de Reide Premium',
            description: 'Se você quiser participar de várias Batalhas de Reide por dia, precisa Adicionar no Carrinho o Passe de Reide Premium.',
            price: 100,
            imageUrl: 'https://static1-br.millenium.gg/articles/1/33/51/@/80454-pokemon-go-objet-premium-raid-pass-orig-1-full-1.png'
        }
    })

        await prisma.product.upsert({
        where: { id: 17, },
        update: {},
        create: {
            name: 'Upgrade de bolsa',
            description: 'A bolsa é onde você armazena todos os seus itens.',
            price: 100,
            imageUrl: 'https://static1-br.millenium.gg/articles/1/33/51/@/80385-pokemon-go-agrandir-le-sac-objet-orig-1-full-1.png'
        }
    })

        await prisma.product.upsert({
        where: { id: 18, },
        update: {},
        create: {
            name: 'Upgrade do estoque de Pokémon',
            description: 'O estoque de Pokémon é onde você guarda os Pokémon e ovos que encontra durante suas aventuras.',
            price: 100,
            imageUrl: 'https://static1-br.millenium.gg/articles/1/33/51/@/80388-pokemon-go-extension-stockage-objet-orig-1-full-1.png'
        }
    })

        await prisma.product.upsert({
        where: { id: 19, },
        update: {},
        create: {
            name: 'Medalhão de Equipe',
            description: 'Você cansou da equipe que escolheu quando começou a jogar?',
            price: 100,
            imageUrl: 'https://static1-br.millenium.gg/articles/1/33/51/@/80391-item-1406-orig-1-full-1.png'
        }
    })

        await prisma.product.upsert({
        where: { id: 20, },
        update: {},
        create: {
            name: 'Pedaço de Estrela',
            description: 'Este item especial pode ser usado para obter 50% mais Poeira Estelar por 30 minutos',
            price: 100,
            imageUrl: 'https://static1-br.millenium.gg/articles/1/33/51/@/80469-starpiece-orig-1-full-1.png'
        }
    })

        await prisma.product.upsert({
        where: { id: 21, },
        update: {},
        create: {
            name: 'Fruta Frambo',
            description: 'Aumenta em 1,5x a taxa de captura sobre o próximo lançamento bem sucedido',
            price: 100,
            imageUrl: 'https://static1-br.millenium.gg/articles/1/33/51/@/80406-pokemon-go-objet-baie-framby-orig-1-full-1.png'
        }
    })

        await prisma.product.upsert({
        where: { id: 22, },
        update: {},
        create: {
            name: 'Fruta Frambo Dourada',
            description: 'Aumenta em 2,5x a taxa de captura sobre o próximo lançamento bem sucedido',
            price: 100,
            imageUrl: 'https://static1-br.millenium.gg/articles/1/33/51/@/80409-pokemon-go-objet-baie-framby-doree-orig-1-full-1.png'
        }
    })

        await prisma.product.upsert({
        where: { id: 23, },
        update: {},
        create: {
            name: 'Fruta Anaba',
            description: 'Reduz a probabilidade de um Pokemon de se mover ou atacar por um fator de 20.',
            price: 100,
            imageUrl: 'https://static1-br.millenium.gg/articles/1/33/51/@/80412-pokemon-go-baie-nanana-orig-1-full-1.png'
        }
    })

        await prisma.product.upsert({
        where: { id: 24, },
        update: {},
        create: {
            name: 'Fruta Anaba',
            description: 'Reduz a probabilidade de um Pokemon de se mover ou atacar por um fator de 20.',
            price: 100,
            imageUrl: 'https://static1-br.millenium.gg/articles/1/33/51/@/80415-pokemon-go-baie-nanab-orig-1-full-1.png'
        }
    })

        await prisma.product.upsert({
        where: { id: 25, },
        update: {},
        create: {
            name: 'Fruta Caxí Prateada',
            description: 'Aumenta em 1,8x a taxa de captura',
            price: 100,
            imageUrl: 'https://static1-br.millenium.gg/articles/1/33/51/@/80418-silver-pinap-berry-orig-1-full-1.png'
        }
    })

}

main().then(async () => {
    await prisma.$disconnect()
}).catch(async (e) => {
    console.log(e)
    await prisma.$disconnect()
    process.exit()
})