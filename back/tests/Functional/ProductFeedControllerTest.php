<?php
/**
 * Created by PhpStorm.
 * User: fgamess
 * Date: 22/02/2018
 * Time: 08:18
 */

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class ProductFeedControllerTest extends WebTestCase
{

    public function testProcessFeed()
    {
        $url = '{ "url": "assets/product-feed-sample.xml" }';
        $route ="/product/feed/process?data=".$url;
        $client = static::createClient();
        // Enable the output buffer
        ob_start();
        $client->request('GET', $route, [], [], ['HTTP_X-Requested-With' => 'XMLHttpRequest']);


        // Send the response to the output buffer
        $client->getResponse()->sendContent();
        // Get the contents of the output buffer
        $content = ob_get_contents();
        $this->assertContains('{"productID"', $content);
        // Clean the output buffer and end it

    }
}
