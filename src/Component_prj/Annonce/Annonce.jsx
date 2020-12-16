import React from 'react'
import './Annonce.css'
import im from '../../components/dd.jpg'
import img_fruits from '../images/img_fruits.jpg'
import img_rail from '../images/img_rail.jpg'
import img_medical from '../images/img_medical.jpg'
import img_bl from '../images/img_bl.jpg'
import img_lait from '../images/img_lait.jpg'





export default function Annonce() {
    return (
<div > 
<div class="card  ml-4">
      <h2>Nous recherchons des petits producteurs de fruits et légumes<h6>date publication  Dec 7,2020</h6>
      <h5 className="ml-2">  Annonceur de Maroc</h5>  </h2>
         <img src={img_fruits} alt="error uplod imge annoce" />
         <h5 className="mt-2"> desccription annonce </h5>
     <p className="ml-3">Nous recherchons des petits producteurs de fruits et légumes en général et de fraise et raisins en particulier le tout produit en côte d'ivoire pour approvisionnement en grande quantité dès le mois de février</p>
     </div>


     <div class="card  ml-4">
      <h2>Des barres d'acier utilisé à vendre <h6>date publication  Dec 7,2020</h6>
      <h5 className="ml-2">Annonceur de Burkina Faso </h5>  </h2>
         <img src={img_rail} alt="error uplod imge annoce" />
         <h5 className="mt-2"> desccription annonce </h5>
     <p className="ml-3">Bonjour a vendre 35 000 000 tonnes, used rail origine saoudienne. prix 165 usd par tonnes. intéressé contactez moi sur watshap cordialement . <br/>
- 165 USD<br/>
- Conditionnement :CIF<br/>
- Quantite :35 000 000 Tonnes</p>
     </div>

     <div class="card  ml-4">
      <h2>Stock de combinaisons de protection médical<h6>date publication  Dec 7,2020</h6>
      <h5 className="ml-2"> Annonceur de l'Algérie </h5>  </h2>
         <img src={img_medical} alt="error uplod imge annoce" />
         <h5 className="mt-2"> desccription annonce </h5>
     <p className="ml-3">Nous avons actuellement en algérie un stock immédiatement disponible de combinaisons de protection médical. ces combinaisons avec capuche sont un vêtement de travail qui assurent une protection optimale contre les particules biologiques et chimiques et une protection antistatique en industrie lourde et industrie légère, ces combinaisons sont de catégorie iii en type 3-4 et 5-6 (en 14126:2003) <br/>
- Paiement après livraison possible !<br/>
- Restriction :Toutes destinations / Prix compétitifs<br/>
- Conditionnement :Palettes Avion ou Camion<br/>
- Quantite :Quantité illimitée par fret aérien ou camion</p>
     </div>


     <div class="card  ml-4">
      <h2>Stock du lait infantile en poudre <h6>date publication  Dec 11,2020</h6>
      <h5 className="ml-2">  Annonceur d'Angola  </h5>  </h2>
         <img src={img_lait} alt="error uplod imge annoce" />
         <h5 className="mt-2"> desccription annonce </h5>
     <p className="ml-3"> nous avons de dispo actuellement le lait infantile en poudre gallia calisma croissance 3 en boite de 900 grammes: avec code ean: 3041091099914 stock de 90 palettes disponible au sol immédiatement, chaque palette transporte 45 colis de 6 boites de 900 grammes avec dluo jusque fin 2021 ( 27/12/2021) et jusque début 2022 (19/01/2022). possibilité de venir visiter et contrôler notre stock avan <br/>
- Prix competitifs<br/>
- Restriction :Toutes Destinations<br/>
- Quantite :90 palettes</p>
     </div>


     <div class="card  ml-4">
      <h2>Blouses hospitalières à Vendre <h6>date publication  Dec 12,2020</h6>
      <h5 className="ml-2">  Annonceur de cote d'ivoire  </h5>  </h2>
         <img src={img_bl} alt="error uplod imge annoce" />
         <h5 className="mt-2"> desccription annonce </h5>
     <p className="ml-3">nous vendons des blouses hospitalières de protection médicale totalement imperméables qui sont produites en tissus 100% polypropylène non-tissé et sont aux normes ue avec attestation de conformité ce selon la directive européenne (eu) 93/42/eec incluant les différentes normes telles que: - en 13795-1 -iso 22716:2007 -iso 13485:2016 -iso 9001:2015 ces blouses de couleur bleu sont en 30 gra <br/>
- Prix competitifs <br/>
- Restriction :Toutes Destinations<br/>
- Conditionnement :Virement bancaire ou L/C<br/>
- Quantite :Minimum 50.000 unités</p>
     </div>

      





</div>
    )
}
