<?php
/**
 * Created by PhpStorm.
 * User: fgamess
 * Date: 21/02/2018
 * Time: 15:57
 */

namespace Tests\Unit\Service;

use App\Service\XmlFeedProcessor as SUT;
use PHPUnit\Framework\TestCase;

class XmlFeedProcessorTest extends TestCase
{
    /**
     * @var SUT
     */
    public $sut;

    public function setUp()
    {
        $this->sut = new SUT();
    }

    public function testGetCategories()
    {
        $xml = <<<XML
        <product>
            <categories>
                <category>accessoires</category>
            </categories>
        </product>
XML;

        $xmlElement = new \SimpleXMLElement($xml);
        $this->assertInternalType('array', $this->sut->getCategories($xmlElement));
    }

}
