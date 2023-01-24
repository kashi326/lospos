<?php

namespace App\Enums;

trait Enums
{
    public static function getValues(): array
    {
        return array_column(self::cases(), 'value');
    }
}
