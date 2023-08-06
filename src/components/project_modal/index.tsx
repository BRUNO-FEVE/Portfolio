import Navbar from '../navbar'
import './styles.css'
import { FaGithub, FaJava, FaPager} from 'react-icons/fa'
import { TbBulbFilled } from 'react-icons/tb'
import { PiFileSqlFill } from 'react-icons/pi'
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md'

import IconComponent from '../little_components/icon-component'
import CarouselCard from '../little_components/carousel-card'
import SmallCircle from '../little_components/small-circle'

// import { computerOne } from "../../assets/1-pc-hourcounter.png";

function ProjectModal(props: {bg_color: string}) {

    const iconsList = [
        {
            icon: TbBulbFilled,
            label: 'Tema Livre'
        },
        {
            icon: PiFileSqlFill,
            label: 'Conexão ao Banco de dados MySQL'
        },
        {
            icon: FaJava,
            label: 'Liguagem de Programação: Java'
        },
        {
            icon: FaPager,
            label: 'Interfaces Graficas'
        }
    ]

    return (
        <div className='project-modal'>
            <Navbar text={'Ficha Técnica'} text_color_black={false} bg_color={props.bg_color}/>
            <div className='container-display'>
                <div className='display-img hour-counter-img'>
                    <p>Hour Counter</p>
                    <a href="https://github.com/BRUNO-FEVE/Hour-Counter" target={'_blank'} rel="noreferrer"><FaGithub className='github-icon'/></a>
                </div>  
                <FaJava className='background-icon'/>
            </div>
            <div className="container-objective">
                <p className='objective-title'>Principais Objetivos:</p>
                <p className='objective-text'>O Hour Counter foi concebido como um projeto semestral da disciplina de Linguagens de Programação, com o intuito de atender a uma série de requisitos específicos. </p>
                <div className='objective-icon-list'>
                    {iconsList.map((icon) => {
                        return <div>
                            <IconComponent label={icon.label} icon={icon.icon} />
                        </div>
                    })}
                </div>
            </div>
            <div className='container-theme'>
                <div className='theme-png' />
                <p>Foi escolhido como tema a implementação de um <span>sistema de registro de horas</span> para as diversas entidades do Instituto Mauá de Tecnologia, visando a padronização desse procedimento em toda a instituição.</p>
            </div>
            <div className='container-documentation'>
                <p className='default-paragraph'>Após a definição do tema, elaboramos as interfaces gráficas e planejamos o banco de dados, permitindo-nos identificar quais seriam as partes mais desafiadoras do projeto.</p>
                <div className='default-img prototype-img' />
                <p className='default-paragraph'>O principal desafio foi desenvolver uma organização eficiente de classes, baseada nos princípios da <span>programação orientada a objetos</span>, que fosse capaz de reduzir significativamente o número de linhas de código e, consequentemente, eliminar a repetição de código.</p>
                <p className='default-paragraph'> Nossa solução consistiu em criar uma classe chamada PageModel (Modelo da Página), onde estarão presentes os componentes comuns a todas as páginas: JMenu e um JPanel para armazenar o conteúdo principal de cada tela.</p>
                <div className='default-img poo-model-img' />
                <p className='db-title'>Conexão com o Banco de Dados:</p>
                <p className='default-paragraph'>Essas quatro funções desempenham papéis cruciais na interação com o banco de dados MySQL, garantindo o <span>armazenamento correto</span> dos dados e o <span>acesso adequado</span> às informações necessárias para o sistema de contador de horas.</p>
                <CarouselCard>
                    <div className='default-img img-db-connection-1'/>
                    <p>A função insertLogin( ) é responsável por inserir os dados de login no banco de dados, permitindo o registro de novos usuários.</p>
                </CarouselCard>
                <div className='carousel-bar'>
                    <MdArrowBackIos className='carousel-icon'/>
                    <div className='carousel-circles'>
                        <SmallCircle isChecked={true}/>
                        <SmallCircle isChecked={false}/>
                        <SmallCircle isChecked={false}/>
                        <SmallCircle isChecked={false}/>
                    </div>
                    <MdArrowForwardIos className='carousel-icon'/>
                </div>
            </div>
        </ div>
    )
}

export default ProjectModal