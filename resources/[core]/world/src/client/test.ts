import { Vector3 } from '@lib/math';
import worldController from './controllers/world-controller';
import { onResourceInit, PVGame, PVTarget } from '@lib/client';
import { Delay } from '@lib/functions';
import { Log } from '@lib/client/comms/ui';

const registerTargets = () => {
  Log('register targets');
  PVTarget.AddTarget({
    id: 'open_cellar',
    type: 'model',
    group: [GetHashKey('P_CS_LUC_BASEDR'), GetHashKey('P_CS_LUC_BASEDR_1')],
    data: [
      {
        id: 'open_cellar',
        label: 'Open Cellar',
        icon: 'door-open',
        event: 'world:client:open-cellar',
        parameters: {},
      },
    ],
    options: {
      distance: 3.0,
      isEnabled(data) {
        // Log('isEnabled', data);
        // Log('serial::cellar-door-open', worldController.stateBool.get('serial::cellar-door-open'));
        return !(worldController.stateBool.get('serial::cellar-door-open') || false);
      },
    },
  });
  PVTarget.AddTarget({
    id: 'close_cellar',
    type: 'model',
    group: [GetHashKey('P_CS_LUC_BASEDR'), GetHashKey('P_CS_LUC_BASEDR_1')],
    data: [
      {
        id: 'close_cellar',
        label: 'Close Cellar',
        icon: 'door-closed',
        event: 'world:client:close-cellar',
        parameters: {},
      },
    ],
    options: {
      distance: 3.0,
      isEnabled(data) {
        // Log('isEnabled', data);
        // Log('serial::cellar-door-open', worldController.stateBool.get('serial::cellar-door-open'));
        return worldController.stateBool.get('serial::cellar-door-open') || false;
      },
    },
  });
};

worldController.stateBool.set('serial::cellar-door-open', false);

onResourceInit('target', registerTargets);

on('world:client:open-cellar', (pEntity: number, pArgs: Record<string, any>) => {
  Log('world:client:open-cellar', pEntity, pArgs);
  worldController.stateBool.set('serial::cellar-door-open', true);
  const animDict = 'script_rc@sklr@ig@ig1_opendoor';
  const animOffset = { x: -0.03258881, y: -1.82538, z: 0.7651197 };

  const doorLeft = worldController.getEntity('serial::cellar-door-l');
  const doorRight = worldController.getEntity('serial::cellar-door-r');

  Log('doorLeft', doorLeft);
  Log('doorRight', doorRight);

  if (!doorLeft || !doorRight) {
    return;
  }

  const coords = Vector3.fromArray(
    GetOffsetFromEntityInWorldCoords(doorLeft, animOffset.x, animOffset.y, animOffset.z),
  );
  coords.z -= 1.0;
  const doorRot = Vector3.fromArray(GetEntityRotation(doorLeft, 2));
  const rot = new Vector3(0.0, 0.0, doorRot.z);
  rot.z -= 40.0;
  if (PVGame.playerCoords().z > 96.0) {
    PVGame.taskPlayAnimAdvArray(coords.toObject(), rot.toObject(), [
      {
        dict: animDict,
        anim: 'arthur_open_doors_arthur',
        delta: 0.0,
        duration: 1150,
      },
      {
        dict: animDict,
        anim: 'arthur_open_doors_arthur',
        delta: 0.4666,
        additional: [
          {
            obj: doorLeft,
            anim: 'arthur_open_doors_luc_basedr_l_door',
            stayInAnim: true,
            flags: 32768,
          },
          {
            obj: doorRight,
            anim: 'arthur_open_doors_luc_basedr_r_door',
            stayInAnim: true,
            flags: 32768,
          },
        ],
      },
    ]);
  } else {
    PVGame.taskPlayEntityAnim([
      {
        obj: doorLeft,
        dict: animDict,
        anim: 'arthur_open_doors_luc_basedr_l_door',
        delta: 0.635,
        stayInAnim: true,
        flags: 32768,
      },
      {
        obj: doorRight,
        dict: animDict,
        anim: 'arthur_open_doors_luc_basedr_r_door',
        delta: 0.4666,
        stayInAnim: true,
        flags: 32768,
      },
    ]);
  }

  worldController.stateBool.set('cellarDoor', true);
});

on('world:client:close-cellar', (pEntity: number, pArgs: Record<string, any>) => {
  worldController.stateBool.set('serial::cellar-door-open', false);
  const animDict = 'script_rc@sklr@ig@ig1_opendoor';

  const doorLeft = worldController.getEntity('serial::cellar-door-l');
  const doorRight = worldController.getEntity('serial::cellar-door-r');

  if (!doorLeft || !doorRight) {
    return;
  }

  PVGame.taskPlayEntityAnim([
    {
      obj: doorLeft,
      dict: animDict,
      anim: 'enter_closed_doors_luc_basedr_l_door',
      stayInAnim: true,
      flags: 32768,
    },
    {
      obj: doorRight,
      dict: animDict,
      anim: 'enter_closed_doors_luc_basedr_r_door',
      stayInAnim: true,
      flags: 32768,
    },
  ]);

  worldController.stateBool.set('cellarDoor', false);
});
