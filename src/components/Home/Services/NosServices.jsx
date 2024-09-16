import React from 'react';
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { VscLaw } from "react-icons/vsc";
import { MdImportExport } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { AiFillPropertySafety } from "react-icons/ai";
import { SiMaterialformkdocs } from "react-icons/si";
import { GiCommercialAirplane } from "react-icons/gi";
import ServiceCards from './ServiceCards';
// import Foncier from './Foncier';


const NosServices = () => {

    const icon1 = <GrMoney className='text-red-500 mx-auto' size={50}/>
    const icon2 = <MdImportExport className='text-red-500 mx-auto' size={50}/>
    const icon3 = <VscLaw className='text-red-500 mx-auto' size={50}/>
    const icon4 = <MdOutlineRealEstateAgent className='text-red-500 mx-auto' size={50}/>
    const icon5 = <AiFillPropertySafety className='text-red-500 mx-auto' size={50}/>
    const icon6 = <SiMaterialformkdocs className='text-red-500 mx-auto' size={50}/>
    const icon7 = <GiCommercialAirplane className='text-red-500 mx-auto' size={50}/>

   
    
  return (
    <div className='container pt-24 mx-auto'>
        <div>
            <h1 className='font-bold text-4xl text-center'>Nos <span className='text-primary'>Services</span></h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5'>
            <ServiceCards 
             icon={icon1} 
             title="Foncier" 
             subtitles={["Dans le domaine du foncier, nous accompagnons nos  clients dans l'acquisition,la gestion et l'optimisation de terrains. que ce soit pour des projets résidentiels, commerciaux ou industriels, nous fournissons des conseils stratégiques et des solutions adaptées pour maximiser la valeur et l'utilisation des biens fonciers. Vente de Terrain" ]}
             internalLink='/services/foncier' />
            <ServiceCards 
              icon={icon2} 
              title="Import-Export" 
              subtitles={["En tant qu'acteurs clés dans le commerce international, nous facilitons les opérations d'importation et d'exportation. Nous gérons les aspects logistiques, douaniers et réglemtaires pour garantir une chaine d'approvisionnement fluide et conforme."]}
              internalLink='/services/importexport' 
            />
            <ServiceCards 
              icon={icon3} 
              title="Service Contentieux" 
              subtitles={["Nous offrons u service spécialisé en contentieux immobilier pour résoudre tous les litiges liés à l'achat de terrains ou d'autre biens immobiliers. Que ce soit pour des conflits liés à des transactions, des droits de propriété ou d'autres questions juridiques complexes, nootre équipe de professionnels expérimentés est pr^étee à défendre vos intérêts et à trouver des solutions efficaces."]} 
              internalLink='/services/contentieux'
            />
            <ServiceCards 
              icon={icon4} 
              title="La Recherche de Financement" 
              subtitles={["Nous soutenons les entreprises et projets dans leur quête de financement. Que ce soit pour des investissements, des expansions ou des projets spécifiques, notre expertise en recherche de financement nous permet de connecter nos clients avec les sources de financement les plus adaptées à leurs besoins."]}
              internalLink='/services/recherche-financement' 
            />
            <ServiceCards 
              icon={icon5} 
              title="Négoce de Matière Première" 
              subtitles={["Nous sommes spécialisés dans le négoce de matières premières, offrant à nos clients des solutions sur mesure pour leurs besoins en ressources naturelles. Grâce à notre réseau mondial et à notre expertise sectorielle, nous garantissons des produits de haute qualité à des conditions avantageuses."]}
              internalLink='/services/negoce' 
            />
            <ServiceCards 
              icon={icon6} 
              title="Gestion de Biens immobiliers" 
              subtitles={["Dans le secteur de l'immobilier, nous offrons une gamme complète de services, allant de la gestion d'actifs immobiliers à la transaction de propriétés. Notre équipe d'experts aide nos clients à trouver des opportunités d'investissement et à gérer leurs portefeuilles immobiliers de manière efficace."]}
              internalLink='/services/gestion-immobilier' 
              />
            <ServiceCards 
              icon={icon7} 
              title="Répresentation Commercial"
              subtitles={["En tant que représentants commerciaux, nous facilitions la mise en relation entre producteurs et clients. Nous développons des stratégies de vente efficaces et utilisons notre connaissance du marché pour optimiser les opportunités commerciales et maximiser les résultats pour nos partenaires."]} 
              internalLink='/services/representation-commercial'
            />
        </div>
    </div>
  )
}

export default NosServices