<?php
/**
 * Created by PhpStorm.
 * User: fgamess
 * Date: 21/02/2018
 * Time: 15:50
 */

namespace App\Service;


class XmlFeedProcessor
{
    /**
     * @param string $url
     * @return \Generator
     */
    public function getDataFromXml(string $url):\Generator
    {
        $xml = new \XMLReader();
        $xml->open($url);
        while($xml->read() && $xml->name != 'product')
        {
            ;
        }
        while($xml->name == 'product') {
            $element = new \SimpleXMLElement($xml->readOuterXml());



            $product = array(
                'productID' => strval($element->productID),
                'name' => strval($element->name),
                'description' => strval($element->description),
                'currency' => strval($element->price->attributes()->currency),
                'price' => strval($element->price),
                'categories' => [ 'categories' => $this->getCategories($element)],
                'productURL' => strval($element->productURL),
                'imageURL' => strval($element->imageURL),
            );

            $xml->next('product');
            unset($element);
            yield $product;
        }
    }

    /**
     * @param \SimpleXMLElement $xmlElement
     * @return array
     */
    public function getCategories(\SimpleXMLElement $xmlElement):array
    {
        $categories = [];
        $categoriesXmlElement = $xmlElement->categories;
        foreach ($categoriesXmlElement as $category) {
            $categories[] = strval($category->category);
        }

        return $categories;
    }
}