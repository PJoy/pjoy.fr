<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        //basic info
        $age = date('Y',time()) - date('Y', mktime(00,00,00,01,15,1991));
        $address = [
            'street' => '29, quai Saint Vincent',
            'postalCode' => '69001',
            'city' => 'Lyon',
            'country' => 'France'
        ];

        $experiences = array();
        //experience
        if (($handle = fopen(__DIR__.'/data/experience_fr.csv', "r")) !== FALSE) {
            while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
                switch ($data[2]){
                    case '1':
                        $data[2] = 'main';
                        break;
                    case '2':
                        $data[2] = 'second';
                        break;
                    case '3':
                        $data[2] = 'third';
                        break;
                }
                array_push($experiences,[
                    'employer' => $data[0],
                    'job' => $data[1],
                    'category' => $data[2],
                    'start' => $data[3],
                    'end' => $data[4],
                    'place' => $data[5],
                    'website' => $data[6],
                    'link' => $data[7],
                    'description' => $data[8]
                ]);
            }
            fclose($handle);
        }
        array_shift($experiences);

        //skills
        $json_file = file_get_contents(__DIR__.'/data/skills.json');
        $json_file = preg_replace('/\n/', '',$json_file);
        $skills = json_decode($json_file,true);

        //portfolio
        $projects = [];
        if (($handle = fopen(__DIR__.'/data/portfolio.csv', "r")) !== FALSE) {
            while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
                $tags = explode(',',$data[3]);
                $images = explode(',',$data[4]);
                array_push($projects,[
                    'title' => $data[0],
                    'start' => $data[1],
                    'end' => $data[2],
                    'tags' => $tags,
                    'images' => $images,
                    'shortdesc' => $data[5],
                    'desc' => $data[6]
                ]);
            }
            fclose($handle);
        }
        array_shift($projects);
        usort($projects, function ($item1, $item2) {
            if ($item1['start'] == $item2['start']) return 0;
            return $item1['start'] > $item2['start'] ? -1 : 1;
        });

        $projectCats = [
            'catName',                      //0
            'développement web front-end',  //1     a
            'développement web back-end',   //2     a
            'graphisme',                    //3     b
            'développement créatif',        //4     b
            'traitement d\'images',         //5     c
            'génération procédurale',       //6     d
            'jeu vidéo',                    //7     b
            'développement embarqué',       //8     a
            'génération récursive',         //9     d
            'recherche',                    //10    e
            'formation',                    //11    e
            'son'                           //12    b
        ];
        //array_shift($projectCats);

        $profile = [
            'age' => $age,
            'address' => $address
        ];
        // replace this example code with whatever you need
        return $this->render('default/index.html.twig', [
            'profile' => $profile,
            'experiences' => $experiences,
            'skills' => $skills,
            'projects' => $projects,
            'projectCats' => $projectCats
        ]);
    }
}
