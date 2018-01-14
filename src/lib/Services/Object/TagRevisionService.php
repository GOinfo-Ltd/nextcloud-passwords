<?php
/**
 * Created by PhpStorm.
 * User: marius
 * Date: 24.12.17
 * Time: 12:18
 */

namespace OCA\Passwords\Services\Object;

use OCA\Passwords\Db\TagRevision;
use OCA\Passwords\Db\TagRevisionMapper;
use OCA\Passwords\Hooks\Manager\HookManager;
use OCA\Passwords\Services\EncryptionService;
use OCA\Passwords\Services\ValidationService;

/**
 * Class TagRevisionService
 *
 * @package OCA\Passwords\Services\Object
 */
class TagRevisionService extends AbstractRevisionService {

    /**
     * @var string
     */
    protected $class = TagRevision::class;

    /**
     * TagRevisionService constructor.
     *
     * @param null|string       $userId
     * @param HookManager       $hookManager
     * @param TagRevisionMapper $revisionMapper
     * @param ValidationService $validationService
     * @param EncryptionService $encryptionService
     */
    public function __construct(
        ?string $userId,
        HookManager $hookManager,
        TagRevisionMapper $revisionMapper,
        ValidationService $validationService,
        EncryptionService $encryptionService
    ) {
        parent::__construct($userId, $hookManager, $revisionMapper, $validationService, $encryptionService);
    }

    /**
     * @param string $model
     * @param string $label
     * @param string $color
     * @param string $cseType
     * @param int    $edited
     * @param bool   $hidden
     * @param bool   $trashed
     * @param bool   $favourite
     *
     * @return TagRevision
     *
     * @throws \OCA\Passwords\Exception\ApiException
     */
    public function create(
        string $model,
        string $label,
        string $color,
        string $cseType,
        int $edited,
        bool $hidden,
        bool $trashed,
        bool $favourite
    ): TagRevision {

        $revision = $this->createModel($model, $label, $color, $cseType, $edited, $hidden, $trashed, $favourite);

        $revision = $this->validationService->validateTag($revision);
        $this->hookManager->emit($this->class, 'postCreate', [$revision]);

        return $revision;
    }

    /**
     * @param string $model
     * @param string $label
     * @param string $color
     * @param string $cseType
     * @param int    $edited
     * @param bool   $hidden
     * @param bool   $trashed
     * @param bool   $favourite
     *
     * @return TagRevision
     */
    protected function createModel(
        string $model,
        string $label,
        string $color,
        string $cseType,
        int $edited,
        bool $hidden,
        bool $trashed,
        bool $favourite
    ): TagRevision {

        $revision = new TagRevision();
        $revision->setUserId($this->userId);
        $revision->setUuid($this->generateUuidV4());
        $revision->setCreated(time());
        $revision->setUpdated(time());
        $revision->setDeleted(false);
        $revision->_setDecrypted(true);

        $revision->setModel($model);
        $revision->setCseType($cseType);
        $revision->setSseType(EncryptionService::DEFAULT_SSE_ENCRYPTION);
        $revision->setHidden($hidden);
        $revision->setTrashed($trashed);
        $revision->setLabel($label);
        $revision->setColor($color);
        $revision->setEdited($edited);
        $revision->setFavourite($favourite);
        $revision->setClient('');

        return $revision;
    }
}