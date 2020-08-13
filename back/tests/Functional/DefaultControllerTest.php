<?php
/**
 * Created by PhpStorm.
 * User: fgamess
 * Date: 22/02/2018
 * Time: 07:51
 */

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class DefaultControllerTest extends WebTestCase
{
    public function testIndex()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/');

        $this->assertEquals(200, $client->getResponse()->getStatusCode());
    }
}
