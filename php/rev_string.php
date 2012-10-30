<?php

function revStr($string='') 
{
    $str = (string)$string;
    $len = strlen($str);
    $rev = '';
    
    if($len > 0 )
    {
        $i = 1;
        while($i <= $len)
        {
            $rev .= substr($str,-$i,1);
            $i++;
        }        
    }
    return $rev;
}

echo revStr('cat');
