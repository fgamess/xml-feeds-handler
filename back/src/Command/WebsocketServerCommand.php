<?php

namespace App\Command;

use App\WebSocket\MessageHandler;
use Ratchet\Http\HttpServer;
use Ratchet\Server\IoServer;
use Ratchet\WebSocket\WsServer;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class WebsocketServerCommand extends Command
{
    protected static $defaultName = "run:websocket-server";

    private $messageHandler;

    public function __construct(string $name = null, MessageHandler $messageHandler)
    {
        parent::__construct($name);
        $this->messageHandler = $messageHandler;
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $port = 3001;
        $output->writeln("Starting server on port " . $port);
        $server = IoServer::factory(
            new HttpServer(
                new WsServer(
                    $this->messageHandler
                )
            ),
            $port
        );
        $server->run();
        return Command::SUCCESS;
    }
}