<?php


namespace App\WebSocket;

use App\Service\XmlFeedProcessor;
use Exception;
use Ratchet\ConnectionInterface;
use Ratchet\RFC6455\Messaging\Message;
use Ratchet\RFC6455\Messaging\MessageInterface;
use Ratchet\WebSocket\MessageComponentInterface;
use SplObjectStorage;

final class MessageHandler implements MessageComponentInterface
{
    protected $connections;

    protected XmlFeedProcessor $xmlFeedProcessor;

    protected  string $projectDir;

    public function __construct(XmlFeedProcessor $xmlFeedProcessor, $projectDir)
    {
        $this->connections = new SplObjectStorage;
        $this->projectDir = $projectDir;
        $this->xmlFeedProcessor = $xmlFeedProcessor;
    }

    function onOpen(ConnectionInterface $conn)
    {
        $this->connections->attach($conn);
    }

    function onClose(ConnectionInterface $conn)
    {
        $this->connections->detach($conn);
    }

    function onError(ConnectionInterface $conn, Exception $e)
    {
        $this->connections->detach($conn);
        $conn->close();
    }

    public function onMessage(ConnectionInterface $conn, MessageInterface $msg)
    {
        /** @var ConnectionInterface $connection */
        foreach($this->connections as $connection)
        {
//            if($connection != $conn)
//            {
//                continue;
//            }

//            $feedUrl = $this->projectDir . DIRECTORY_SEPARATOR . json_decode((string) $msg, true)['feedUrl'];
            $feedUrl ="https://github.com/fgamess/xml-feeds-handler/raw/master/xml-feeds/product-feed-sample.xml";
            foreach($this->xmlFeedProcessor->getDataFromXml($feedUrl) as $data) {
                $connection->send(json_encode(['message' => json_encode($data)]));
            }
//            $connection->send(json_encode(['message' => json_decode($msg->getContents(), true)]));
        }
    }
}