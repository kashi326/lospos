<?php

function getSNo(int $index):int
{
    return (int)($index + (request('page', 1) - 1) * request('perPage', 10) + 1);
}
