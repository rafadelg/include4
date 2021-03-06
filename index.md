# #Include4
## Ejercicios 1 y 2 plataforma, y XOR

## Calcular: [**MD5 Hash**](https://rafadelg.github.io/include4/ex01_md5/)

## Calcular: [**SHA256 Hash** *y su posterior MD5*](https://rafadelg.github.io/include4/ex02_sha256/)

## Calcular: [**XOR**](https://rafadelg.github.io/include4/ex03_XOR/)

Los Algoritmos de "disgestión" (*Message Digest, hash* o *fingerprint*), conocidos como **MDx** y **SHA's**, reducen el msg original a una secuencia de bits q lo identifican, a la q llamamos "huella digital" o "compendio" del msg. Contribuyen a garantizar la integridad, una de las dimensiones de la seguridad, porque permiten detectar si el contenido de un msg se altera y, también, forman parte de los procesos de firma electrónica.

Estos algorítmos realizan una serie de operaciones matemáticas utilizando una función de dispersión unidireccional q impide reconstruir el msg original a partir de su huella/compendio.

Respecto del MD5, creado en el 91 por [Ronald L. Rivest](https://amturing.acm.org/award_winners/rivest_1403005.cfm) y definido en la [RFC 1321](https://tools.ietf.org/html/rfc1321), se encuentra cada vez más en desuso por sus vulnerabilidades, como la colisión (generación de una misma huella por msgs distintos), entre otras.

Otras lecturas o recursos recomendados:

*<http://www.criptored.upm.es/descarga/Class4cryptc4c7.2_Funcion_hash_MD5.pdf>*

*<https://news.sophos.com/es-es/2017/01/27/algoritmo-md5-las-horas-contadas/>*

Y para el SHA-2 (Secure Hash Algorithm 2):

*<https://csrc.nist.gov/glossary/term/sha_256>*

*<https://www.rfc-editor.org/info/rfc6234>*