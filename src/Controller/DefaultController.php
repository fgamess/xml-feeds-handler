<?php
/**
 * Created by PhpStorm.
 * User: fgamess
 * Date: 19/02/2018
 * Time: 16:43
 */

namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="homepage")
     *
     */
    public function newProductFeed()
    {
        return $this->render('index.html.twig');
    }
}