<?php
/**
 * Created by PhpStorm.
 * User: fgamess
 * Date: 18/02/2018
 * Time: 01:25
 */

namespace App\Controller;

use App\Service\XmlFeedProcessor;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Routing\Annotation\Route;

class ProductFeedController extends AbstractController
{
    /**
     * @param Request $request
     *
     * @return StreamedResponse
     * @Method({"GET"})
     * @Route("/product/feed/process", name="product_feed_process")
     *
     */
    public function processFeed(Request $request, XmlFeedProcessor $xmlFeedProcessor)
    {
        @ini_set('implicit_flush', 1);
        @ini_set('zlib.output_compression',0);
        @ob_end_clean();
        set_time_limit(0);

        $jsonDecoded = json_decode($request->query->get('data'), true);
        $productFeedUrl = $jsonDecoded['url'];
        if (!$request->isXmlHttpRequest()) {
            throw new BadRequestHttpException('AJAX request expected.');
        }

        $response = new StreamedResponse();
        $response->setCallback(function () use ($xmlFeedProcessor, $productFeedUrl) {
            ob_implicit_flush(1);
            foreach($xmlFeedProcessor->getDataFromXml($productFeedUrl) as $data) {
                echo str_repeat(' ',1024*1024*4);
                $jsonData = json_encode($data);
                echo $jsonData;
                flush();
                usleep(1000);
            }
        });

        return $response;
    }
}