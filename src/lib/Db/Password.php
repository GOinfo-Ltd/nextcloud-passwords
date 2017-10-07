<?php
/**
 * Created by PhpStorm.
 * User: marius
 * Date: 26.08.17
 * Time: 20:35
 */

namespace OCA\Passwords\Db;

use JsonSerializable;

/**
 * Class Password
 *
 * @method int getId()
 * @method void setId(int $id)
 * @method bool getDeleted()
 * @method void setDeleted(bool $deleted)
 * @method string getUser()
 * @method void setUser(string $user)
 * @method string getUuid()
 * @method void setUuid(string $uuid)
 * @method string getRevision()
 * @method void setRevision(string $revision)
 * @method int getCreated()
 * @method void setCreated(int $created)
 * @method int getUpdated()
 * @method void setUpdated(int $updated)
 *
 * @package OCA\Passwords\Db
 */
class Password extends AbstractEntity {

    /**
     * @var string
     */
    protected $user;

    /**
     * @var string
     */
    protected $uuid;

    /**
     * @var bool
     */
    protected $deleted;

    /**
     * @var string
     */
    protected $revision;

    /**
     * @var int
     */
    protected $created;

    /**
     * @var int
     */
    protected $updated;

    /**
     * Password constructor.
     */
    public function __construct() {
        $this->addType('user', 'string');
        $this->addType('uuid', 'string');
        $this->addType('revision', 'string');
        $this->addType('deleted', 'boolean');
        $this->addType('created', 'integer');
        $this->addType('updated', 'integer');
    }

    /**
     * @return bool
     */
    public function isDeleted(): bool {
        return $this->getDeleted();
    }
}